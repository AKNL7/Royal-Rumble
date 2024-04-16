// Le store est une sorte de copie de la base donnees, qu'on viens interrogr pour être plus rapide, que le temps de reuqêtes a la vraie bdd. Le store et la base données cvont se syncvhroniser et le store sera modififer si la bdd l'est, en temps réel.

// Le store = State Global
//  Quand on doit modifier le store on crée un reducer
// Les reducers osnt des seteurs qui vont permettre de set une valeur mais aussi d'éxecuter une action. 

import { configureStore } from "@reduxjs/toolkit";

// Quand on import sans les {} on répcupére dans la variable le resulat de export default 
import fightReducer from '../features/fight/fightSlice';
import fightSlice from "../features/fight/fightSlice";

export const store = configureStore({
  reducer: {
    fight: fightReducer
  },
});

export default fightSlice.reducer;