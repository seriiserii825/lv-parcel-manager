<script setup lang="ts">
import Container from "../../Components/Container.vue";
import Title from "../../Components/Title.vue";
import TextLink from "../../Components/TextLink.vue";
import InputField from "../../Components/InputField.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    email: "",
    password: "",
});

function submit() {
    form.post(route("login"), {
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
        <title>Login</title>
        <meta name="description" content="Login to your account" />
    </Head>
    <Container class="w-1/2">
        <div class="mb-8 text-center">
            <Title>Login</Title>
            <p>
                Don't have an account?
                <TextLink routeName="/register" label="Register" />
            </p>
        </div>
        <form @submit.prevent="submit" class="space-y-6">
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
            <PrimaryBtn :disabled="form.processing">Login</PrimaryBtn>
        </form>
    </Container>
</template>
