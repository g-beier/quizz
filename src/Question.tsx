import img01 from "./assets/img-01.png";
import img02 from "./assets/img-02.jpg";
import img03 from "./assets/img-03.jpg";
import img04 from "./assets/img-04.jpg";
import img05 from "./assets/img-05.jpg";
import img06 from "./assets/img-06.jpg";

const data = [
  { button: "Iniciar" },
  { title: "Qual seu nome?", inputType: "text" },
  { title: "Qual sua idade?", inputType: "number" },
  { title: "Você sabe o que está fazendo aqui?", inputType: "text" },
  {
    title: "Independente das respostas, que não estão sendo armazenadas...",
    img: img01,
  },
  {
    title: "Mas eu me dei o direito de fazer algo",
    img: img02,
  },
  {
    title: "Que é de coração <3",
    img: img03,
  },
  { title: "Momento de apreciação", img: img04 },
  {
    title: "Então fica com a mensagem:",
    message: [
      "Muito obrigado por todo o apoio.",
      "Não só nos momentos difíceis, mas também em todos os momentos.",
      "Desculpa te fazer demorar mais pra dormir.",
      "Eu achei só que seria importante você aproveitar e fazer mais esse quizz.",
      "Te amo",
      "vai dormir",
    ],
    img: img05,
  },
  { title: "Acabou agora", img: img06 },
];

export default function Question({ index }: { index: number }) {
  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto py-8">
      {data[index]["title"] && (
        <h2 className="text-red-800 font-bold text-2xl">
          {data[index]["title"]}
        </h2>
      )}
      {data[index]["img"] && (
        <img
          src={data[index]["img"]}
          className="object-cover rounded-lg max-w-xl h-96 aspect-square mx-auto"
        />
      )}
      {data[index]["inputType"] && (
        <input
          className="border-neutral-300 border rounded-md max-w-sm mx-auto "
          type={data[index]["inputType"]}
          min="20"
          max="30"
          placeholder="Digite aqui"
        />
      )}
      {data[index]["message"] &&
        data[index]["message"]?.map((str) => <p>{str}</p>)}
    </div>
  );
}
