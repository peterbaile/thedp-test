import s from 'styled-components'

interface IFillerProps  {
    readonly color: string
}

export const Filler = s.div<IFillerProps>`
margin-top: 1em;
margin-right: 1em;
margin-left: 1em;
margin-bottom: 2em;
height: 90px;
align: center;
background-color: ${({ color }): string => color};
`

export const Circle = s.div`
float: left;
background-color: #C4C4C4;
width: 3rem;
height: 3rem;
border-radius: 50%;
margin-right: 1.5rem;
`