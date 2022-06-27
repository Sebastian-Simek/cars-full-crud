import { client } from './client';

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    console.error(error);
    throw error;
  } else {
    return user;
  }
}




export async function addBook(book){
  const { data, error } = await client  
    .from('cars')
    .insert(book)
    .single();

  return data;
}