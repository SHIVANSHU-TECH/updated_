import React from "react";
import css from "@/app/dashboard/dashboard.module.css";
import Image from "next/image";
import Profile from "../../../public/profile.jpg";
import Link from "next/link";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
const page = () => {
  return (
    <div className={css.container_Dashboard}>
      <div className={css.Navmenu}>
        <div className={css.profile}>
          {/* Place user image if logged in by google else show this template image */}
          <Image src={Profile} alt="Image" width={150} height={150} priority={true}/>
        </div>
        <h2 className={css.text}>Welcome User!</h2>
        <div className={css.menuOptions}>
          <div className={css.menu}>
            <Link href="#">Dashboard</Link>
          </div>
          <div className={css.menu}>
            <Link href="#">Home</Link>
          </div>
        </div>
        <div className={css.logout}>
          <Link href="#">Logout</Link>
        </div>
      </div>

      <div className={css.EventMenu}>
        <div className={css.heading}>
          <h3>Events</h3>
        </div>
        <div className={css.eventContainer}>
          <div className={css.details}>
            <div className={css.img}>{/* Image image to be placed here */}</div>
            <div className={css.evntName}>
              {/* Event Name */}
              <p>Event </p>
            </div>
            <div className={css.evntDate}>
              <span>20-09-2023</span>
            </div>
            <div className={css.evntDesc}>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                quasi at unde enim deleniti odit fugit minima magnam illum
                dolor.
              </span>
            </div>
          </div>

          <div className={css.actionBtns}>
            <div className={css.accept}>
              <button>
                <AiOutlineCheck />
              </button>
            </div>
            <div className={css.reject}>
              <button>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>

        <section>
          <h3>Recently,</h3>

          <div className={css.eventContainer}>
            <div className={css.details}>
              <div className={css.evntName}>
                {/* Event Name */}
                <p>Event </p>
              </div>
            </div>

            <div className={css.remark}>Approved</div>
          </div>
          <div className={css.eventContainer}>
            <div className={css.details}>
              <div className={css.evntName}>
                {/* Event Name */}
                <p>Event </p>
              </div>
            </div>

            <div className={css.remark}>Approved</div>
          </div>
          <div className={css.eventContainer}>
            <div className={css.details}>
              <div className={css.evntName}>
                {/* Event Name */}
                <p>Event </p>
              </div>
            </div>

            <div className={css.remark}>Approved</div>
          </div>
        </section>
      </div>

      <div className={css.EventMenu}>
        <div className={css.heading}>
          <h3>Internships</h3>
        </div>
        <div className={css.eventContainer}>
          <div className={css.details}>
            <div className={css.img}>{/* Image image to be placed here */}</div>
            <div className={css.evntName}>
              {/* Event Name */}
              <p>Event </p>
            </div>
            <div className={css.evntDate}>
              <span>20-09-2023</span>
            </div>
            <div className={css.evntDesc}>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                quasi at unde enim deleniti odit fugit minima magnam illum
                dolor.
              </span>
            </div>
          </div>

          <div className={css.actionBtns}>
            <div className={css.accept}>
              <button>
                <AiOutlineCheck />
              </button>
            </div>
            <div className={css.reject}>
              <button>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>

        <section>
          <h3>Recently,</h3>

          <div className={css.eventContainer}>
            <div className={css.details}>
              <div className={css.evntName}>
                {/* Event Name */}
                <p>Event </p>
              </div>
            </div>

            <div className={css.remark}>Approved</div>
          </div>
          <div className={css.eventContainer}>
            <div className={css.details}>
              <div className={css.evntName}>
                {/* Event Name */}
                <p>Event </p>
              </div>
            </div>

            <div className={css.remark}>Approved</div>
          </div>
          <div className={css.eventContainer}>
            <div className={css.details}>
              <div className={css.evntName}>
                {/* Event Name */}
                <p>Event </p>
              </div>
            </div>

            <div className={css.remark}>Approved</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
