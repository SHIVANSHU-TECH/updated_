import Image from "next/image";
import "@/app/globals.css";
import "@/styles/spritual.module.css";
import Landing from "@/components/LandingEvent/Landing";
import Heading from "@/components/HeadingEvent/Heading";
import Link from "next/link";
import Section from "@/components/sectionEvent/section";
import Card from "@/components/Card/CardEvent";
import "../events/events.css";

export default function page() {
  return (
    <main>
      <Landing />
      
      <Section ID="spiritual" title="Cultural Events Near You" link="spiritual">
      <Link href='/events/form' className="create">create</Link>
        <div className="cardContainer">
          <Card
            title="The Comedy Show"
            date="08 Aug 2023"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tenetur nobis, libero eveniet veniam vero aperiam error quia odio rem?"
          />
          <Card
            title="The Comedy Night Show"
            date="11 Aug 2023"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tenetur nobis, libero eveniet veniam vero aperiam error quia odio rem?"
          />
          <Card
            title="The Standup comedy show"
            date="08 Aug 2023"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tenetur nobis, libero eveniet veniam vero aperiam error quia odio rem?"
          />
          <Card
            title="The Standup comedy show"
            date="08 Aug 2023"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tenetur nobis, libero eveniet veniam vero aperiam error quia odio rem?"
          />
        </div>
      </Section>
      <Section ID="comedy" title="Technical Events Near You" link="comedy">
        <div className="cardContainer">
          <Card
            title="The Comedy Show"
            date="08 Aug 2023"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tenetur nobis, libero eveniet veniam vero aperiam error quia odio rem?"
          />
        </div>
      </Section>
      <Section ID="artist" title="Sports event Near You" link="arts">
        <div className="cardContainer">
          <Card
            title="The Historical Show"
            date="08 Aug 2023"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tenetur nobis, libero eveniet veniam vero aperiam error quia odio rem?"
          />
          <Card
            title="The Historical Show"
            date="08 Aug 2023"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tenetur nobis, libero eveniet veniam vero aperiam error quia odio rem?"
          />
        </div>
      </Section>
    </main>
  );
}
