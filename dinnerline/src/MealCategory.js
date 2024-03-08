/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';

function MealCategory(props) {
    const meals = props.Meals;
    const categoryCon = css`
        display:flex;
        width:100%;
        flex-direction:column;
    `;
    const categoryTitle = css`
        font-weight:bold;
        font-size: 36px;
        width:100%;
    `;

    const mealsCon = css`
        display:flex;
        width:100%;
        justify-content:center;
    `
    const cardsCon = css`
        width:90%;
    `

    const mealCard = css`
        height:240px;
        width: 300px;
    `
    return (
        <div css={categoryCon}> 
            <div css={categoryTitle}>{props.name}</div>
            <div css={mealsCon}>
                <div css={cardsCon}>
                    <div css={mealCard}>
                        s
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MealCategory;