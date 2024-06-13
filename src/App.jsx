import { usePersistentState } from './usePersistentState';
import ClientSideStorage from './ClientSideStorage';
import ChatRoom from './ChatRoom';
import './App.css'
import OptimisticUIDemo from './OptimisticUIDemo';
import OnboardingFlow from './OnboardingFlow';

function App() {
  const [firstName, setFirstName] = usePersistentState('firstName', '');
  const [lastName, setLastName] = usePersistentState('lastName', '');
  const [age, setAge] = usePersistentState('age', '');
  const [hairColor, setHairColor] = usePersistentState('hairColor', '');
  const [favoriteFood, setFavoriteFood] = usePersistentState('favFood', '');
  const [favoriteDrink, setFavoriteDrink] = usePersistentState('favDrink', '');

  const onOnboardingComplete = () => {
    console.log({
      firstName,
      lastName,
      age,
      hairColor,
    });
  }

  return (
    <>
    <OnboardingFlow onComplete={onOnboardingComplete}>
      <div>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name"></input>
        <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name"></input>
      </div>
      <div>
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age"></input>
        <input value={hairColor} onChange={e => setHairColor(e.target.value)} placeholder="Hair Color"></input>
      </div>
      <div>
        <input placeholder="Favorite Food"></input>
        <input placeholder="Favorite Drink"></input>
      </div>
    </OnboardingFlow>
    </>
  );
}

export default App
