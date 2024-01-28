import pp1 from "../../public/pp1.jpg";
import pp2 from "../../public/pp2.jpg";
import pp3 from "../../public/pp3.jpg";
import pp4 from "../../public/pp4.jpg";

const mock_data = [
  {
    id: 1,
    image: pp1,
    name: "Dore Brantl",
    profession: "Senior Financial Analyst",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
  {
    id: 2,
    image: pp2,

    name: "Trudey Gricewood",
    profession: "Paralegal",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
  {
    id: 3,
    image: pp3,

    name: "Hy Iozefovich",
    profession: "Business Systems Development Analyst",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
  {
    id: 4,
    image: pp4,

    name: "Garrott Glasgow",
    profession: "Office Assistant II",
    character:
      "A compassionate and creative individual with a zest for life and a talent for connecting with others.",
  },
];

function Testimonials() {
  return (
    <div>
      <section
        id="for the carousel box"
        className=" flex flex-col items-center "
      >
        <div>
          <img
            className=" w-36 h-36 object-cover object-top rounded-full"
            alt="pp"
            src={pp1}
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quod
            consequuntur iusto maiores molestiae.
          </p>
        </div>
        <hr />
        <p>Bibesh Basner</p>
        <p>Engineer</p>
      </section>
    </div>
  );
}

export default Testimonials;

export const Card = ({ user }) => {
  return (
    <>
      <section id="for the carousel box">
        <div>
          <img alt="pp" src={user.image} />
        </div>
        <div>
          <p>{user.character}</p>
        </div>
        <hr />
        <p>{user.name}</p>
        <p>{user.profession}</p>
      </section>
    </>
  );
};
