import React from "react";
import AnimatedText from "@/components/AnimatedText";

const Ugprocedure = () => {
  return (
    <div>
      <AnimatedText
        text="Procedure For B. Tech Admission"
        className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
      />
      <div className="flex flex-wrap rounded-2xl p-4 w-full">
        <p className="pb-1 font-sans font-medium my-2 text-lg">
          &emsp;&emsp;&emsp;Candidates seeking admission in the four-year B.Tech
          degree courses are required to pass Higher Secondary (10 + 2) or
          equivalent examination of West Bengal Council of Higher Secondary
          Education or any other recognized Board or University conforming to
          norms stipulated by West Bengal Joint Entrance Examination Board.
        </p>
        <p className="pb-1 my-2 font-sans font-medium text-lg">
          &emsp;&emsp;&emsp;In all the B.Tech courses students will be admitted
          on the basis of merit position in the Joint Entrance Examination of
          the State (WBJEE) and All India Joint Entrance Examination (JEE Main).
        </p>
        <p className="pb-1 my-2 font-sans font-medium text-lg">
          &emsp;&emsp;&emsp;10% students will be admitted under management quota
          as per directives of State Government.
        </p>
        <p className="pb-1 my-2 font-sans font-medium text-lg">
          &emsp;&emsp;&emsp;Diploma Holders in Engineering/ Technology on the
          basis of merit position in West Bengal Joint Entrance Examination for
          Lateral Entry (JELET) are eligible for admission in the 3rd semester
          (2nd year) of B.Tech course to maximum limit of 20% of the approved
          intake in each course.
        </p>
        <p className="pb-1 my-2 font-sans font-medium text-lg">
          &emsp;&emsp;&emsp;Candidate should satisfy the stipulated standard of
          physical fitness with good mental and physical health.
        </p>
      </div>
    </div>
  );
};

export default Ugprocedure;
