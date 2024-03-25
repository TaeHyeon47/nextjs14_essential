import Image from 'next/image';

import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import { notFound } from 'next/navigation';

// 모든 page.js는 params 값을 자동으로 받게 된다.
// [mealsSlug] 안에 들어간 'mealsSlug'가 key 값이 된다.
export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}> {meal.creator} </a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* dangerouslySetInnerHTML을 사용하면 크로스사이트 스크립팅 공격에 노출된다. */}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
