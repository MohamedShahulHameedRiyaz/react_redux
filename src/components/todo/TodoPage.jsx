import { useEffect, useState } from "react";
import * as todoActions from '../../redux/action/todoActions';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from "../common/Spinner";

export const TodoPage = () => {      
    const dispatch = useDispatch();
    const { todos, loading } = useSelector(state => ({ todos: state.todos, loading: state.apiStatus }));
    const [saving, setSaving] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        setSaving(true);
        dispatch(todoActions.createTodo({ id: todos.length + 1, todo: data.todo }));
        toast.success('🦄 Todo Saved');
        setSaving(false);
        reset(); // Reset the form after submission
    };

    useEffect(() => {
        dispatch(todoActions.loadTodos());
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder="Name"
                name="todo"
                {...register('todo', { required: true, maxLength: 20 })}
                className={errors.todo ? 'input-error' : ''}
            />
            {errors.todo && <p className="error-message">Todo is required.</p>}
            <button type="submit">{saving ? 'Saving...' : 'Submit'}</button>
            {loading > 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <Spinner />
                </div>
            ) : (
                todos.map(todo => <div key={todo.id}>{todo.todo}</div>)
            )}
                <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
        </form>
    );
};
