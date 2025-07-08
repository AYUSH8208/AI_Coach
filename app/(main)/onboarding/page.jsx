import React from "react";
import { industries } from "@/app/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import OnboardingForm from "./components/onboarding-form";
const OnboardingPage = async() => {

    const {isOnboarded}=await getUserOnboardingStatus();
    if (isOnboarded){
        redirect("/dashboard");
    }
    return (
        <main>
            <OnboardingForm industries={industries} />
        </main>
    )
}
export default OnboardingPage;