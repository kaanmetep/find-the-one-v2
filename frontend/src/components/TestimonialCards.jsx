import { Quote } from "lucide-react";
function TestimonialCards() {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-4 mt-12 italic text-slate-700 tracking-wider line-clamp-5">
      <div className=" shadow-2xl flex flex-col gap-12 rounded-md">
        <div className="p-4">
          <Quote className="size-8 mb-4" />
          <p className=" text-center mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            accusantium, fugit quam voluptatem, doloribus facilis dignissimos
            mollitia natus numquam quos non libero? Nihil itaque error repellat
            debitis ipsum animi vitae cum corrupti rem odio aliquam quos unde
            numquam officia incidunt, consectetur ratione. Cumque voluptates
            harum neque corrupti aut laborum quis.
          </p>
        </div>
        <div className="h-24 bg-rose-200 relative  rounded-t-full  flex items-center justify-center mt-auto">
          <img
            src="pp1.jpg"
            alt="profil-avatar"
            className="block w-24 rounded-full border-white border-4 shadow-lg  absolute top-[-50px]"
          />
          <p className="mt-12 text-slate-600 italic font-bold">Elizabeth P.</p>
        </div>
      </div>
      <div className="flex flex-col shadow-2xl gap-12 border-2 border-rose-200 rounded-md">
        <div className="p-4">
          <Quote className="size-8 mb-4" />
          <p className="text-center mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sequi
            corrupti eius fugiat dolorem soluta nesciunt aperiam iusto ipsa
            repellendus expedita vitae asperiores facere tenetur architecto sunt
            non, cupiditate, dolores delectus quibusdam explicabo possimus
            voluptatem autem. Iure consectetur omnis suscipit! Perspiciatis
            magnam quis nihil rem explicabo dolorum minus inventore vel!
          </p>
        </div>
        <div className="h-24 bg-rose-300 relative  rounded-t-full flex items-center justify-center mt-auto">
          <img
            src="pp3.jpg"
            alt="profil-avatar"
            className="block w-24 rounded-full border-white border-4 shadow-lg  absolute top-[-50px]"
          />
          <p className="mt-12 text-slate-600 italic font-bold">Daniel O.</p>
        </div>
      </div>
      <div className="flex flex-col shadow-xl gap-12 rounded-md">
        <div className="p-4">
          <Quote className="size-8 mb-4" />
          <p className="text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            animi incidunt sapiente! Voluptas unde cumque nemo eligendi earum
            rem esse obcaecati, qui in eaque nobis corrupti. Expedita nesciunt
            magnam ad molestias praesentium at, alias quis. Autem dolorem,
            exercitationem similique dignissimos totam et vero, aperiam ex, ipsa
            quo accusamus amet. Aliquid.
          </p>
        </div>
        <div className="h-24 bg-rose-100 relative  rounded-t-full flex items-center justify-center mt-auto">
          <img
            src="pp4.jpg"
            alt="profil-avatar"
            className="block w-24 rounded-full border-white border-4 shadow-lg  absolute top-[-50px]"
          />
          <p className="mt-12 text-slate-600 italic font-bold">Arya S.</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
