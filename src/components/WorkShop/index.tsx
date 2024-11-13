"use client";
import React from "react";
import s from "./WorkShop.module.scss";
import { useGetWorkShopQuery } from "@/redux/api/workShop";
import Link from "next/link";

const WorkShop = () => {
  const { data } = useGetWorkShopQuery();
  return (
    <div id={s.workShop}>
      <div className="container">
        <div className={s.workShop}>
          <h1>Upcoming Free Workshops</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button>View All Workshops</button>
          <div className={s.cards}>
            {data?.map((el) => (
              <div className={s.card} key={el.id}>
                <h2>{el.name}</h2>
                <p>{el.description?.slice(0, 140)}</p>
                <Link href={"/#"}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShop;
