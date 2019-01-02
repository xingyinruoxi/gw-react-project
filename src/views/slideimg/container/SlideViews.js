import React, {
    Component
} from "react";
import './../assets/less/slide.less'
import BScroll from 'better-scroll';

export default class  extends Component {
    componentDidMount() {
        this.slideAnimate();
    }

    slideAnimate = () => {
        var timer = null;
        var slide = new BScroll(this.refs.slide, {
            momentum: false,
            scrollX: true,
            scrollY: false,
            snap: {
                loop: true,
                threshold: 0.2,
            }
        });
        this.refs.list.style.width = this.refs.list.children.length + '00vw';
        slide.refresh();

        function next() {
            // console.log(456,this.maxScrollX,slide.movingDirectionX());
            slide.next();
        }

        timer = setInterval(next, 2000);
        slide.on('touchEnd', function () {
            clearInterval(timer);
            timer = setInterval(next, 2000);
            console.log('touchEnd');
        });
        slide.on('beforeScrollStart', function () {
            console.log(this.getCurrentPage());
            clearInterval(timer);
            console.log('beforeScrollStart');
        })
    }

    render() {
        return (
            <>
                <div className="slide" ref={'slide'}>
                    <ul className="list" ref={'list'}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </>
        );
    }
};