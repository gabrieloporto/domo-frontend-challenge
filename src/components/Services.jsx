import { DevicesIcon, DocumentIcon, UXIcon } from "./Icons";
import Card from "./Services/Card";
import TextContent from "./Services/TextContent";

const CardContent = [
  {
    title: "Business & Product Concept",
    text: "Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.",
  },
  {
    title: "Web & Mobile Development",
    text: "Plan, develop and text high-quality web-applications using AngularJS, NodeJS, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile languages.",
  },
  {
    title: "UX & UI Design",
    text: "Sketch infotmation architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.",
  },
];

export default function Services() {
  return (
    <article className="service-container" id="services">
      <TextContent />

      <div className="d-flex justify-content-center align-content-center gap-4">
        <Card
          icon={<DocumentIcon />}
          title={CardContent[0].title}
          text={CardContent[0].text}
          mt={5}
        />
        <Card
          icon={<DevicesIcon />}
          title={CardContent[1].title}
          text={CardContent[1].text}
          mt={5}
        />
        <Card
          icon={<UXIcon />}
          title={CardContent[2].title}
          text={CardContent[2].text}
          mt={3}
        />
      </div>
    </article>
  );
}
