"use server";
export async function registerUser(formData) {
  console.log("Name : ", formData.get("name"));
  console.log("Email : ", formData.get("email"));
  console.log("Password : ", formData.get("password"));
  return { message: "Got the Data!" };
}
