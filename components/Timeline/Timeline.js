import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrWorkshop } from "react-icons/gr";
import { IoMdSchool } from "react-icons/io";
import { TiStarOutline } from "react-icons/ti";
import { motion, useScroll, useSpring } from "framer-motion";

const Timeline = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div>
      <motion.div className="progress-bar"
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}/>
      <h1 class="text-yellow-400 text-center text-2xl font-semibold italic relative inset-x-0 top-2 bottom-5 h-12 ...">
        Timeline Carlos H.
      </h1>

      <VerticalTimeline lineColor="#718096">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(#010101, #000, #121213)", color: "#CBD5E0" }}
          contentArrowStyle={{ borderRight: "7px solid  #000" }}
          date="2011 - present"
          iconStyle={{ background: "linear-gradient(255deg, #ffff6d 0, #fff264 16.67%, #ffd85b 33.33%, #f2bd53 50%, #dea34c 66.67%, #cb8d47 83.33%, #bb7a43 100%)", color:"white" }}
          icon={<GrWorkshop />}
        >
          <b className="vertical-timeline-element-title">Creative Director</b>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png"
            alt="img12"
            style={{ width: "100%", height: "100%" }}
            class="rounded-lg relative top-2"
          />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate sollicitudin nulla non pulvinar. In eget imperdiet magna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate sollicitudin nulla non pulvinar. In eget imperdiet magna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate sollicitudin nulla non pulvinar. In eget imperdiet magna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate sollicitudin nulla non pulvinar. In eget imperdiet magna.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "linear-gradient(255deg, #ffff6d 0, #fff264 16.67%, #ffd85b 33.33%, #f2bd53 50%, #dea34c 66.67%, #cb8d47 83.33%, #bb7a43 100%)", color:"white" }}
          contentStyle={{ background: "linear-gradient(#5269a7, #455c9a, #38539c)", color: "#fff" }}
          icon={<GrWorkshop />}
        >
          <b className="vertical-timeline-element-title">Art Director</b>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate sollicitudin nulla non pulvinar. In eget imperdiet magna.
          </p>
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png"
            alt="img13"
            style={{ width: "100%", height: "100%" }}
            class="rounded-lg relative top-2"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GrWorkshop />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-11.png"
            alt="img11"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GrWorkshop />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-10.png"
            alt="img10"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-9.png"
            alt="img9"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-8.png"
            alt="img8"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-7.png"
            alt="img7"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "radial-gradient(circle at -20.44% 43.84%, #8e9aff 0, #3c78f2 50%, #005ae4 100%)", color: "white" }}
          icon={<TiStarOutline />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
