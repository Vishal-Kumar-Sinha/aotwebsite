import React from "react";
import AnimatedText from "@/components/AnimatedText";

const Pgprocedure = () => {
  return (
    <div>
      <AnimatedText
        text="Procedure For MCA Admission"
        className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
      />
      <div className="flex flex-wrap rounded-2xl p-4 w-full">
        <p className="pb-1 font-sans font-medium text-lg">
          &emsp;&emsp;&emsp;Candidates seeking admission in the two-year MCA
          programme are required to be Bachelor Degree holders under (10 + 2 +
          3) system with Computer or Mathematics as one of the subjects at
          Degree level.
        </p>
        <p className="pb-1 font-sans font-medium text-lg">
          &emsp;&emsp;&emsp;Admission will be made on the basis of merit
          position of the candidate in the Joint Entrance Examination for
          Admission to Master in Computer Application (JECA) conducted by the
          State Joint Entrance Board.
        </p>
        <p className="pb-1 font-sans font-medium text-lg">
          &emsp;&emsp;&emsp;Candidate should satisfy the stipulated standard of physical fitness with good mental and physical health.
        </p>
      </div>
    </div>
  );
};

export default Pgprocedure;
