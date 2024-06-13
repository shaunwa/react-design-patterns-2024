import { useState, Children } from 'react';
import { usePersistentState } from './usePersistentState';

export default ({ onComplete, children }) => {
    const [currentStep, setCurrentStep] = usePersistentState('currentStep', 0);
    const totalSteps = children.length;

    const currentChild = Children.toArray(children)[currentStep];

    const goToNext = () => {
        if (currentStep >= totalSteps - 1) {
            onComplete();
        } else {
            setCurrentStep(currentStep + 1);
        }
    }

    const goToPrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return (
        <div>
            <h3>Step {currentStep + 1} of {totalSteps}</h3>
            {currentChild}
            <button onClick={goToPrevious}>Back</button>
            <button onClick={goToNext}>Next</button>
        </div>
    );
}