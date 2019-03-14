import * as React from "react"

export interface ButtonOption {
    text?: string;
    icon?: string;
    onClick?: () => void;
    className?:string[];
    type?: 'normal' | 'default' | 'danger';
    size?: 'sm' | 'xm' | 'lg';
    href?: string;
    target?: string;
    defalutCls?: string;
    loading?: boolean;
}

export default class Button extends React.Component<ButtonOption, any>{
    static defaultProps = {
        defalutCls: 'keep-btn',
        loading: false,
        type: 'default',
        size: 'xm'
    }
    constructor(props: ButtonOption) {
        super(props);
    }

    render() {
        const {
            defalutCls, className, size, type, onClick, text
          } = this.props;

        const isAny: any = {};

        return <button className={className===undefined?'':className.join(" ")} type='button' onClick={onClick}  >{text}</button>
    }


}