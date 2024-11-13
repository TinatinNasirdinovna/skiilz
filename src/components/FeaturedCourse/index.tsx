"use client";
import React from "react";
import s from "./FeaturedCourse.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useGetCourseQuery } from "@/redux/api/course";

const FeaturedCourse = () => {
  const { data } = useGetCourseQuery();
  console.log("🚀 ~ FeaturedCourse ~ data:", data);

  return (
    <div id={s.course}>
      <div className="container">
        <div className={s.course}>
          <h1>Featured Courses</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam
          </p>
          <button>View All Courses</button>
          <div className={s.cards}>
            {data?.map((el) => (
              <div className={s.card} key={el.id}>
                <Image src={el.image} alt="img" width={380} height={197} />
                <div className="">
                  <h2>{el.description}</h2>
                  <h3>{el.author}</h3>
                  <h4>$ {el.price} USD</h4>
                  <Link href={"/#"}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourse;
