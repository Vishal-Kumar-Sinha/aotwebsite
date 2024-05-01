import React from "react";
import AnimatedText from "@/components/AnimatedText";

const Support = () => {
  return (
    <div className="mt=4">
      <AnimatedText
        text="Financial Aid & Support"
        className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
      />
      <div>
        <div className="px-6 py-2 ml-10 font-serif text-xl w-fit">
          <ul style={{ listStyleType: "disc" }}>
            <li className="my-1">
              Active assistance to avail educational loans from nationalized
              banks.
            </li>
            <li className="my-1">
              Financial assistance from various Government and Non Government
              Organizations.
            </li>
            <li className="my-1">
              Scholarship/ Stipend from Backward Classes Welfare Department,
              Government of West Bengal for SC/ ST/ OBC students.
            </li>
            <li className="my-1">
              Education Loan from West Bengal Minority Development and Finance
              Corporation for students from Minority Community.
            </li>
            <li className="my-1">
              Scholarship/ Stipend from different Central Government
              Organisations.
            </li>
            <li className="my-1">
              Railway Concession for all eligible students.
            </li>
          </ul>
        </div>
        <div className="font-sans font-bold italic text-xl drop-shadow-xl">
          &emsp;&emsp;&emsp;Full/Half Tuition Fees Waiver under West Bengal
          Freeship Scheme for economically backward meritorious students
          admitted in 4-year B. Tech courses. Such tuition fees waiver scheme is
          renewable in every semester subject to academic performance of
          concerned student.
        </div>
      </div>
    </div>
  );
};

export default Support;
