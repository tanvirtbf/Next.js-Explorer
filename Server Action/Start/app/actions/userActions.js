"use server";
export async function registerUser(previousState, formData) {
    console.log("Previous State : ", previousState);
  console.log("Name : ", formData.get("name"));
  console.log("Email : ", formData.get("email"));
  console.log("Password : ", formData.get("password"));
  return { message: `User ${formData.get("name")} registered successfully!`};
}
