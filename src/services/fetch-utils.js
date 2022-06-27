import { client } from './client';

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    throw error;
  } else {
    return user;
  }
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({
    email: email,
    password: password,
  });
  if (error) {
    throw error;
  } else {
    return user;
  }
}


export async function logOut() {
  const { error } = await client.auth.signOut();
}





export async function addBook(book){
  const { data, error } = await client  
    .from('books')
    .insert(book)
    .single();
  
  if (error) {
    throw error;
  } else {
    return data;
  }
  
}