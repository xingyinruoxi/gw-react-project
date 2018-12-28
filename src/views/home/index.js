import React, {
    Component
} from "react";
import BScroll from 'better-scroll'
import './assets/css/index.less'
export default class  extends Component {
    componentDidMount(props) {
        // console.log(this.props);
        console.log(this.refs.wrap);
        new BScroll(this.refs.wrap)
    }

    render() {
        return (
            <>
                <h1>我是首页！！！</h1>
                <div className="wrap" ref={'wrap'}>
                    <div className="content">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li>10</li>
                        </ul>
                    </div>
                </div>
            </>

        );
    }
};