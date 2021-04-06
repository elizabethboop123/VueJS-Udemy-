<template>
    <div @click="$emit('taskStateChanged', task)"
        class="task" :class="stateClass">
        <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 200px;
        height: 100px;
        padding: 10px;
        border-radius: 6px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid #330e2a;
        background-color: #8f299c;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #368135;
        background-color: #3b683e;
        text-decoration: line-through;
    }

    .pending .close {
        background-color: #c02015;
    }

    .done .close {
        background-color: #1e3b1e;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>
