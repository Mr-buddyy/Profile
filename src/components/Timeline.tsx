import { Component } from "solid-js";

interface TimelineProps {
    timelinetype: any; // Sesuaikan tipe children dengan kebutuhan
    timelinedate: any;
    timelinecompany: any;
    timelineposition: any;
    timelinedesc: any;
    hr: boolean;
}

const Timeline: Component<TimelineProps> = (props) => {
    return (
        <div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-20">
                <li>
                    {props.hr ? <hr /> : null}
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class={props.timelinetype}>
                        <time class="font-mono italic">{props.timelinedate}</time>
                        <div class="text-lg font-black">{props.timelinecompany}</div>
                        <div class="text-lg font-black">{props.timelineposition} </div>
                        <div>{props.timelinedesc}</div>{" "}
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default Timeline;
