import { Form, json, redirect, useActionData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export default function NewPost() {
  const actionData = useActionData<typeof action>();
  return (
    <Form
      method="POST"
      className="flex flex-col gap-4 h-[50vh] justify-between"
    >
      <div className="flex flex-col gap-4 h-[75%]">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border py-4 px-2"
        />
        <p className="text-red-300">{actionData?.fieldErrors?.title}</p>
        <textarea
          name="body"
          placeholder="Your post"
          className="border flex-1 p-2"
        />
        <p className="text-red-300">{actionData?.fieldErrors.body}</p>
      </div>
      <button className="border py-4">Submit</button>
    </Form>
  );
}

function validateTitle(title: string) {
  if (typeof title !== "string" || title.length < 3) {
    return "Title should be atleast 3 characters long";
  }
}

function validateBody(body: string) {
  if (typeof body !== "string" || body.length < 10) {
    return "Body should be atleast 10 characters long";
  }
}

export async function action({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  const fieldErrors = {
    title: validateTitle(formData.title),
    body: validateBody(formData.body),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    console.log(fieldErrors);
    return json({ fieldErrors, formData }, { status: 400 });
  }

  const post = await db.post.create({ data: formData });

  return redirect(`/posts/${post.id}`);
}
