'use server';

// 'use server'는 서버 액션을 만드는데 서버에서 실행된다는 것이 보장된다.
// shareMeal는 서버에서만 사용된다.
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  console.log(meal);
}
