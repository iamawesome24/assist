import { combineReducers } from "@reduxjs/toolkit";
import logReducer from "../features/logSlice";
import logSetActiveReducer from "../features/logSetActiveSlice";
import viewResearchReducer from "../features/viewResearchSlice";
import viewAnalysisReducer from "../features/viewAnalysisSlice";
import chatMessagesReducer from "../features/chatMessagesSlice";
import questionMessagesReducer from "../features/questionMessagesSlice";
import promptReducer from "../features/promptSlice";
import logNewResearchReducer from "../features/logNewResearchSlice";
import isQuestionReducer from "../features/isQuestionSlice";
import namePathReducer from "../features/namePathSlice";
import createQuestionReducer from "../features/createQuestionSlice";
import tokensReducer from "../features/tokenSlice";
import getPlansReducer from '../features/getPlanSlice'
import postPlansReducer from '../features/postPlanSlice'

const rootReducer = combineReducers({
  logs: logReducer,
  logSetActive: logSetActiveReducer,
  logNewResearch: logNewResearchReducer,
  viewResearch: viewResearchReducer,
  viewAnalysis: viewAnalysisReducer,
  chatMessages: chatMessagesReducer,
  questionMessages: questionMessagesReducer,
  prompt: promptReducer,
  isQuestion: isQuestionReducer,
  namePath: namePathReducer,
  createQuestion: createQuestionReducer,
  tokens: tokensReducer,
  getPlans: getPlansReducer,
  postPlans: postPlansReducer
});

export default rootReducer;
