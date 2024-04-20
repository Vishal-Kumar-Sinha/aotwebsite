import React from "react";
import Progressbarcircle from "./Progressbarcircle";
import { IntersectionObserver } from "./IntersectionObserver";

const Skills = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
        <div className="my-1 p-6 mr-4 hover:scale-105 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        <div className="my-1 p-6 mx-4 hover:scale-105 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        <div className="my-1 p-6 mx-4 hover:scale-105 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        <div className="my-1 p-6 mx-4 hover:scale-105 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        <div className="my-1 p-6 mx-4 hover:scale-105 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        <div className="my-1 p-6 mx-4 hover:scale-105 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        <div className="my-1 p-6 mx-4 hover:scale-105 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        <div className="my-1 p-6 mx-4 hover:scale-110 ease-in-out duration-300">
          <article className="rounded-lg">
              <div className="w-40 h-40 block">
                <IntersectionObserver>
                  <Progressbarcircle title="HTML" percentage={75} />
                </IntersectionObserver>
              </div>
          </article>
        </div>
        
      </div>
    </>
  );
};

export default Skills;
