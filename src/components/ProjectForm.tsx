"use client"
import {SessionInterface} from "../../common.types";
import React, {ChangeEvent} from "react";
import Image from "next/image";
import FormField from "@/components/FormField";
import CustomMenu from "@/components/CustomMenu";
import {categoryFilters} from "@/constants";

type Props = {
    type: string;
    session: SessionInterface,
}
const ProjectForm = ({type, session}: Props) => {
    const handleFormSubmit = (e: React.FormEvent) => {};
    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};
    const handleStateChange = (fieldName: string, value: string) => {

    }

    const form = {
        image: "",
        title: "",
        description: "",
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flexStart form">

            <div className="flexStart form_image-container">
                <label htmlFor="poster" className="flexCenter form_image-label">
                    {!form.image && "Choose a poster for your project"}</label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    required={type === 'create'}
                    className="form_image-input"
                    onChange={handleChangeImage}
                />
                {form.image && (
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20"
                        alt="Project poster"
                        fill
                    />
                )}
            </div>

            <FormField
                title="Title"
                state={form.title}
                placeholder="Flexibble"
                setState={(value) => handleStateChange('title', value)}
            />
            <FormField
                title="Description"
                state={form.description}
                placeholder="Showcase and discover remarkable developer projects"
                setState={(value) => handleStateChange('description', value)}
            />
            <FormField
                type="url"
                title="Website URL"
                state={form.liveSiteUrl}
                placeholder="http://jsmastery.pro"
                setState={(value) => handleStateChange('liveSiteUrl', value)}
            />
            <FormField
                type="url"
                title="Github URL"
                state={form.githubUrl}
                placeholder="http://github.com/dindjarin"
                setState={(value) => handleStateChange('githubUrl', value)}
            />

            <CustomMenu
                title="Category"
                state={form.category}
                filters={categoryFilters}
                setState={(value) => handleStateChange('category', value)}


            />


            <div className="flexStart w-full">
                <button>Create</button>
            </div>
        </form>
    )
}

export default ProjectForm;
