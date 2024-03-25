import React, { useState } from "react";
import Events from "../general components/Events";
import Message, { ResponseChat } from "../general components/ChatModel";
import Nav from "./NavBar";

function Forum() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [answers, setAnswers] = useState({});
  const [showAnswerForm, setShowAnswerForm] = useState({});

  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    if (newQuestion.trim() !== "") {
      setQuestions([...questions, newQuestion]);
      setAnswers({ ...answers, [questions.length]: [] });
      setShowAnswerForm({ ...showAnswerForm, [questions.length]: false });
      setNewQuestion("");
    }
  };

  const toggleAnswerForm = (index) => {
    setShowAnswerForm({ ...showAnswerForm, [index]: !showAnswerForm[index] });
  };

  const handleAnswerSubmit = (event, questionIndex) => {
    event.preventDefault();
    const answerInput = event.target.elements.answer;
    const answer = answerInput.value;
    if (answer.trim() !== "") {
      setAnswers({
        ...answers,
        [questionIndex]: [...answers[questionIndex], answer],
      });
      answerInput.value = "";
    }
  };

  return (

    <div>
      <div className="bg-gray-900">
      
      </div>
      <div className="bg-[#2D2828] py-10 px-[8rem] flex justify-between items-center flex-wrap">
        <div className="w-[50%]">
        <h1 className="text-4xl font-bold text-white pb-6">Forum Africain</h1>
        <p className="text-white text-xl pb-4 w-full">
          Découvrez l'univers africain sur notre forum. Trouvez des réponses
          à vos questions sur la culture africaine, l'art et les pratiques artisanales. Échangez avec des passionnés de la culture africaine pour
          stimuler votre connaissance.
        </p>

        <p className="text-xl text-gray-100 pb-2">Posez une question :</p>
        <form onSubmit={handleQuestionSubmit}>
          <textarea
            className="w-full p-2 border border-gray-500 bg-gray-200 rounded-md"
            value={newQuestion}
            onChange={handleQuestionChange}
            rows={4}
            cols={50}
          />
          <br />
          <button
            className="bg-green-500 text-white text-sm font-medium py-3 px-4 hover:bg-green-700 ease duration-500 mt-2 rounded-xl"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>

      <div>
      <Events class="max-w-lg p-10 bg-black text-gray-100 my-8" />
      </div>
      </div>


      <div className="px-[18rem] py-2">
            <h2 className="text-2xl font-semibold my-4">Questions posées :</h2>
            <ul>
              {questions.map((question, index) => (
                <li key={index} className="border-b border-gray-300 py-4">

                <Message question={question}/>

                  
                  <button
                    className="text-green-500"
                    onClick={() => toggleAnswerForm(index)}
                  >
                    {showAnswerForm[index] ? "Masquer le champ réponse" : "Répondre"}
                  </button>
                  {showAnswerForm[index] && (
                    <form onSubmit={(e) => handleAnswerSubmit(e, index)}>
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-md mt-2"
                        name="answer"
                        rows={2}
                        cols={40}
                        placeholder="Répondre à la question"
                      />
                      <button
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
                        type="submit"
                      >
                        Envoyer
                      </button>
                    </form>
                  )}
                  <ul className="mt-4 ml-16">
                    {answers[index] &&
                      answers[index].map((answer, idx) => (
                        <li key={idx} className="pl-4">

                   <ResponseChat response={answer} />

                          
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>


    </div>
  );
}

export default Forum;
