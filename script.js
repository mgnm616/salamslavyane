function answer() {
  let answerInput = document.getElementById("input").value;
  let questionContainer = document.getElementById("question-container");
  let resultDiv = document.getElementById("result");
  
  questionContainer.style.display = "none";
  resultDiv.innerHTML = '<div class="result-container"><p>Привет! Твое письмо в тот раз тронуло меня, поэтому я попробовал сделать это с целью поздравить тебя (сайт шлак, но все же). Прежде всего, в твой день, я бы хотел пожелать тебе терпения, ведь на твоем жизненном пути будет просто ОГРОМНОЕ количество трудностей и проблем, и только терпение и поддержка поможет тебе справиться с ними. Так же, классных людей рядом, которые поддерживают и понимают тебя, ведь иногда их так не хватает. Живи красиво и наслаждайся моментами. Многие люди не ценят свою жизнь, унывают по пустякам. Но все-таки, жизнь одна (если ты конечно не веришь в жизнь после смерти), нужно постараться не просрать ее.  Общаясь с тобой, я узнал много нового, переосмыслил многие вещи и спасибо тебе за это. Недавно наткнулся на цитату, и она мне очень понравилась. «Мне нравятся друзья с независимым мышлением, потому что они помогают увидеть проблему со всех сторон». Думаю, она может охарактеризовать тебя. Этим я хочу сказать – будь собой в любой ситуации, полагайся на себя, и в первую очередь слушай себя. Поздравляю с днем рождения!</p></div>';
}
