import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Draggable,MotionPathPlugin);
