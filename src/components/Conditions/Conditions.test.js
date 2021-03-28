import { render, fireEvent } from "@testing-library/react";
import Conditions from "./Conditions";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Conditions", () => {
  const initialState = {
    conditions: {
      conditions: [
        {
          label: "Acanthosis nigricans",
          synonyms: ["Acquired acanthosis nigricans", "Keratosis nigricans"],
        },
        {
          snippet:
            "Addison’s disease (also known as primary adrenal insufficiency or hypoadrenalism) is a rare disorder of the adrenal glands.",
          label: "Addison's disease",
          synonyms: [
            "Addison disease",
            "Primary adrenocortical insufficiency",
            "Primary hypoadrenalism",
            "Adison's disease",
            "hypocorticism",
            "adrenal cortex dysplasia",
            "Bronzed disease",
            "adrenal cortex dysfunction",
            "adrenal cortex insufficiency",
            "Melasma addisonii",
            "Adrenal storm",
            "Primary adrenal deficiency",
            "Suppression adrenal",
            "Adrenal Suppresion",
            "adrenal insufficiency",
          ],
          keywords: [
            "addisons disease",
            "hypoadrenalism",
            "primary adrenal insufficiency",
          ],
        },
        {
          snippet:
            "Alzheimer's disease is the most common cause of dementia. Dementia is a group of symptoms associated with a decline in the way your brain functions, affecting your memory and the way you behave.",
          label: "Alzheimer's disease",
          synonyms: ["AD", "Alzheimer disease", "Alzheimers disease"],
          keywords: ["Alzheimer's disease", "dementia"],
          image:
            "http://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg",
        },
        {
          label: "Sickle cell anaemia",
          synonyms: ["Sickle", "sickle cell"],
        },
      ],
    },
  };
  const mockStore = configureStore();
  let store;
  it("render component as expected", () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Conditions />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
