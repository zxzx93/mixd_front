const CLICK_GENDER = "gender/CLICK_GENDER";

export const genderChange = id => (
  { type: CLICK_GENDER, id }
  );

const genderState = [
  { id: 1, man: false, active: false },
  { id: 2, woman: true, active: false },
];

const initialState = { genderState, gender: "" };

export default function gender(state = initialState, action) {
  switch (action.type) {
    case CLICK_GENDER:
      localStorage.setItem("gender", action.id);
      return {
        ...state,
        gender: action.id,
      };

    default:
      return state;
  }
}
