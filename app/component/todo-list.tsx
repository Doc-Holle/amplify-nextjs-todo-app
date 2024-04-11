
'use client'
import { useEffect } from "react";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

export default function TodoList() {
  // generate your data client using the Schema from your backend

 //create useEffect with createTodo function
  useEffect(() => {
    console.log("createTodo");
    createTodo();
  }, []);



async function createTodo() {
  const client = generateClient<Schema>();
  console.log("createTodo");
  try {
    await client.models.Todo.create({
      // prompt the user to enter the title
      content: "formState",

    });
  } catch (err) {
    console.log("error creating todo: ", err);
  }

}

  // const { data: deletedTodo, errors } = await client.models.Todo.delete(toBeDeletedTodo)

  // ...
  return (
    <div>
        <div className="dark:text-black">Todo-List</div>
    </div>
  )
}
