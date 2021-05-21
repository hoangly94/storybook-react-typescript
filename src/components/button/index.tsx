import * as React from 'react'

export enum Type {
    DEFAULT = 'button',
    SUBMIT = 'submit',
}

export type Props = {
    type?: Type,
    text: string,
    color?: string;
    onClick?(): void,
}

export const Element = (props: Props) => {
    const {
        type,
        text,
        color,
        onClick,
    } = props;

    //create props
    const styles = type === Type.SUBMIT ?
        {
            backgroundColor: 'green',
            color: color,
        } :
        {
            color: color,
        };

    return (
        <button
            onClick={onClick}
            style={styles}
        >
            {text}
        </button>
    )

}

Element.defaultProps = {
    type: Type.DEFAULT,
}