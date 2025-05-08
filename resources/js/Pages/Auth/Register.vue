<script setup lang="ts">
import Container from "../../Components/Container.vue";
import Title from "../../Components/Title.vue";
import TextLink from "../../Components/TextLink.vue";
import InputField from "../../Components/InputField.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

function submit() {
    form.post(route("register"), {
        onSuccess: () => {
            form.reset();
        },
        onError: (errors) => {
            for (const key in errors) {
                form.setError(key, errors[key]);
            }
        },
    });
}
</script>
<template>
    <Head>
        <title>Register</title>
        <meta name="description" content="Register a new account" />
    </Head>
    <Container class="w-1/2">
        <div class="mb-8 text-center">
            <Title>Register a new account</Title>
            <p>
                Already have an account?
                <TextLink routeName="/" label="Login" />
            </p>
        </div>
        <form @submit.prevent="submit" class="space-y-6">
            <InputField
                label="Name"
                icon="id-badge"
                v-model="form.name"
                :error="form.errors.name"
            />
            <InputField
                label="Email"
                icon="at"
                v-model="form.email"
                :error="form.errors.email"
            />
            <InputField
                label="Password"
                type="password"
                icon="key"
                v-model="form.password"
                :error="form.errors.password"
            />
            <InputField
                label="Confirm Password"
                type="password"
                icon="key"
                v-model="form.password_confirmation"
                :error="form.errors.password_confirmation"
            />
            <p class="text-slate-500 text-sm dark:text-slate-400">
                By creating an account, you agree to our Terms of Service and
                Privacy Policy.
            </p>
            <PrimaryBtn :disabled="form.processing">Register</PrimaryBtn>
        </form>
    </Container>
</template>
