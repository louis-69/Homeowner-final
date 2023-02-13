import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const minigraphs = () => {
    return (
        <Sparklines data={[5, 6, 26, 8, 11, 7, 15, 4, 6, 17, 2, 8, 10, 5, 20]}>
            <SparklinesLine color="#FB8F37" />
        </Sparklines>
    );
};
export default minigraphs;
