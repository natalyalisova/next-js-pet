import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";

const CreateProject = () => {
    return (
        <Modal>
            <h3 className="modal-head-text">Create a new Project</h3>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ProjectForm/>
        </Modal>
    )
}

export default CreateProject;
