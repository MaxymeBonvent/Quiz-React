import React, { useState } from 'react'

const Quiz = () => {
  // --- VARIABLES SIMPLES --- //
  
  // Liste de questions et leur choix de réponses
  const questions = 
  [
    [
      "Q1. Qui est le créateur de la série Super Smash Bros. ?",
      [
        {txt: "Masahiro Sakurai", correct: true},
        {txt: "Shigeru Miyamoto", correct: false},
        {txt: "Yuji Naka", correct: false},
        {txt: "Hideo Kojima", correct: false}
      ]
    ],

    [
      "Q2. Dans quel jeu Pokémon apparaissent pour la 1ère fois Palkia et Dialga ?",
      [
        {txt: "Pokémon GO", correct: false},
        {txt: "Pokémon Diamant et Perle", correct: true},
        {txt: "Pokémon Rouge et Bleu", correct: false},
        {txt: "Pokémon Snap", correct: false}
      ]
    ],

    [
      "Q3. Qui détient la Triforce de la Puissance?",
      [
        {txt: "Link", correct: false},
        {txt: "Twinkle", correct: false},
        {txt: "Ganondorf", correct: true},
        {txt: "Midna", correct: false}
      ]
    ],

    [
      "Q4. Le jeu Zelda avec un style en cell-shading s'appelle...?",
      [
        {txt: "Twilight Princess", correct: false},
        {txt: "Oracle of Seasons", correct: false},
        {txt: "Ocarina of Time", correct: false},
        {txt: "The Wind Waker", correct: true}
      ]
    ],

    [
      "Q5. Qui est le renard volant qui accompagne Sonic?",
      [
        {txt: "Knuckles", correct: false},
        {txt: "Shadow", correct: false},
        {txt: "Amy Rose", correct: false},
        {txt: "Tails", correct: true}
      ]
    ],

    [
      "Q6. Lequel de ces personnages utilise des sorts élémentaires?",
      [
        {txt: "Mega Man", correct: false},
        {txt: "Olberic", correct: false},
        {txt: "Wario", correct: false},
        {txt: "Patchouli Knowledge", correct: true}
      ]
    ],

    [
      "Q7. Lequel de ces personnage est décrit comme le plus puissant du royaume animal?",
      [
        {txt: "Bowser", correct: false},
        {txt: "Saki Kurokoma", correct: true},
        {txt: "Carchacrok", correct: false},
        {txt: "Zéroïd", correct: false}
      ]
    ],

    [
      "Q8. Lequel de ces personnages a gravi une montagne?",
      [
        {txt: "Frisk", correct: false},
        {txt: "Madeline", correct: true},
        {txt: "Spelunker", correct: false},
        {txt: "Steve", correct: false}
      ]
    ],

    [
      "Q9. Quelle est l'arme de prédilection de Simon Belmont?",
      [
        {txt: "L'épée", correct: false},
        {txt: "Le fouet", correct: true},
        {txt: "Le marteau", correct: false},
        {txt: "La hache", correct: false}
      ]
    ],

    [
      "Q10. De quel série de jeu vidéo vient Ness?",
      [
        {txt: "Earthbound", correct: true},
        {txt: "Golden Sun", correct: false},
        {txt: "The Elder Scrolls", correct: false},
        {txt: "Tales Of", correct: false}
      ]
    ]
  ]
  // console.log(`questions == ${questions}.`)

  // --- VARIABLES D'ÉTAT --- //

  // Numéro de la question en cours
  const [index, setIndex] = useState(0)
  console.log(`index == ${index}.`)

  // Réponses de l'utilisateur
  const [repUti, setRepUti] = useState(Array(questions.length).fill(null))
  console.log(`repUti == ${repUti}.`)

  // Nombre de bonnes réponses
  const [nbBonnesReponses, setNbBonnesReponses] = useState(0)
  console.log(`nbBonnesReponses == ${nbBonnesReponses}.`)

  // État de complétion du quiz
  const [quizFini, setQuizFini] = useState(false)
  console.log(`quizFini == ${quizFini}.`)

  // --- FONCTIONS --- //

  // Comptage du nombre de bonnes réponses
  const ComptageNbBonnesReponses = () => {
    // Comptage du nombre de bonnes réponses parmi les questions déjà répondu
    let newNbBonnesReponses = repUti.filter(repUti => repUti && repUti.correct).length
    console.log(`newNbBonnesReponses == ${newNbBonnesReponses}.`)

    // Assignation du nouveau nombre de bonnes réponses
    setNbBonnesReponses(newNbBonnesReponses)
    console.log(`nbBonnesReponses == ${nbBonnesReponses}.`)
  }

  // Enregistrement de la réponse cliqué par l'utilsiateur
  const EnregistrerReponse = (reponse) => {
    // Nouveau groupe de réponses utilisateur
    let newRepUti = repUti
    console.log(`newRepUti == ${newRepUti}.`)

    // Placement de l'objet réponse cliqué dans le nouveau groupe de réponses utilisateur
    newRepUti[index] = reponse
    console.log(`newRepUti[${index}] == ${newRepUti[index]}`)

    // Remplacement du groupe de réponses utilisateur actuel par le nouveau groupe de réponses
    setRepUti(newRepUti)
    console.log(`repUti == ${repUti}.`)
    console.log(`repUti[${index}].txt == ${repUti[index].txt}.`)
    console.log(`repUti[${index}].correct == ${repUti[index].correct}.`)

    // Comptage du nombre de bonnes réponses
    ComptageNbBonnesReponses()
  }

  // Affichage de la question suivante
  const AfficherQuestionSuivante = (index) => {
    // Affichage ou non de la question suivante selon la valeur de index
    index == questions.length - 1 ? console.log("C'est déjà la dernière question.") : setIndex(prec => prec + 1)
  }

  // Affichage de la question précédente
  const AfficherQuestionPrecedente = (index) => {
    // Affichage ou non de la question précédente selon la valeur de index
    index == 0 ? console.log("C'est déjà la première question.") : setIndex(prec => prec - 1)
  }

  // Affichage des résultats
  const AfficherResultats = () => {
    // Déclarer que le quiz est fini
    setQuizFini(true)

    // Msg confirmation
    console.log(`quizFini == ${quizFini}.`)
  }

  // Réssayer
  const Reessayer = () => {
    // Remise à 0 du nombre de bonnes réponses
    setNbBonnesReponses(0)
    console.log(`nbBonnesReponses == ${nbBonnesReponses}.`)

    // Vidage du groupe de réponses utilisateur
    setRepUti(Array(questions.length).fill(null))
    console.log(`repUti == ${repUti}.`)
    
    // Remise à 0 de l'index de la question en cours
    setIndex(0)
    console.log(`index == ${index}.`)

    // Déclarer le quiz comme non fini
    setQuizFini(false)
    console.log(`quizFini == ${quizFini}.`)

    // Msg test
    console.log("Reessayer() appelée.")
  }

  // --- RENDU --- //
  return (quizFini ?

    // --- RÉSULTATS --- //

          <div id="div_résultats">

            <h2>Résultats</h2>

            {/* Nombre de bonnes réponses */}
            <h3>{nbBonnesReponses}/{questions.length}</h3>

            {/* Pourcentage de bonnes réponses */}
            <h3>{((nbBonnesReponses/questions.length) * 100).toFixed(2)}% de bonnes réponses</h3>

            {/* Liste des questions et comparaison entre la réponse de l'utilisateur et la bonne réponse */}
            <ul>
              {questions.map((question, idx) => {
                // Utilisation de la fonction Array.find() pour trouver la bonne réponse de chaque question
                const bonneReponse = question[1].find(reponse => reponse.correct);

                return(
                  <li>
                    {/* Question */}
                    {question[0]} 

                    {/* La réponse de l'utilisateur existe-t-elle ? */}
                    {repUti[idx] ? 
                    
                      // Si elle existe
                      (repUti[idx].correct ? 

                        // Si elle est correct, on l'affiche
                        <span> O {repUti[idx].txt}</span> 
                        : 
                        // Si elle est incorrect, on affiche la réponse de l'utilisateur puis la bonne réponse
                        <span> X {repUti[idx].txt} O {bonneReponse.txt}</span>
                      )

                      : 
                      
                      // Si elle n'existe pas, on dit qu'il n'y a pas de réponse
                      <span> Pas de réponse</span>
                    }
                  </li>
                )
                
              })}
            </ul>

            <button title="Réessayer" onClick={() => Reessayer()}>&#8634;</button>
          </div>  
        :

    // --- QUIZ --- //

          <div id="div_composant_Quiz">

            {/* Question actuelle */}
            <h2>{questions[index][0]}</h2>

            {/* Choix de réponses à la question actuelle */}
            <ul>

              {/* Objet.map((nomArbitraireObj, nomArbitraireIndex => (<li key={nomArbitraireIndex}>{nomArbitraireObj.propriété}</li>))) */}
              {questions[index][1].map((reponse, idx) => (
                <li key={idx}>
                  {reponse.txt}<input title="Sélectionner cette réponse" type="radio" name={index} onClick={() => EnregistrerReponse(questions[index][1][idx])}></input>
                </li>
              ))}

            </ul>

              {/* Div des éléments sous les choix de réponses */}
              <div id="div_sous_réponses">

                {/* Boutons */}
                <button title="Afficher la question précédente" onClick={() => AfficherQuestionPrecedente(index)}>&larr;</button>
                <button title="Afficher la question suivante" onClick={() => AfficherQuestionSuivante(index)}>&rarr;</button>
                <button title="Afficher les résultats" onClick={() => AfficherResultats()}>Résultats</button>

                {/* Progression */}
                <p>{index+1}/{questions.length}</p>

              </div>

          </div>
  )
}

export default Quiz