import Layout from "./minigame-canvas-engine";
import ReactReconciler from "react-reconciler";
import React from "react";

function handelStyle(style: any) {
    style && Object.keys(style).forEach(key => {
        if ((key.toLowerCase().includes('height') || key.toLowerCase().includes('top')) && typeof style[key] === 'string' && style[key].endsWith('%')) {
            style[key] = style[key].slice(0, -1) * canvasEl!.height / 100;
        }
        if ((key.toLowerCase().includes('width') || key.toLowerCase().includes('left')) && typeof style[key] === 'string' && style[key].endsWith('%')) {
            style[key] = style[key].slice(0, -1) * canvasEl!.width / 100;
        }
    });
    return style;
}

type Element = {
    children: any[]
} & any;
type Text = any;
// class Element extends Layout.Element {}
// class Text extends Layout.Text {}
// class View extends Layout.View {}
// class ScrollView extends Layout.ScrollView {}
// class Image extends Layout.Image {}

const reconciler = ReactReconciler<string, any, Element, Element, Text, Element, Element, any, any, any, any, any, any>({
    appendChildToContainerChildSet(childSet: any, child: any): void {
    },
    canHydrateInstance(instance: any, type: any, props: any): any {
    },
    canHydrateSuspenseInstance(instance: any): any {
    },
    canHydrateTextInstance(instance: any, text: string): any {
    },
    cancelTimeout(id: any): void {
    },
    cloneHiddenInstance(instance: any, type: any, props: any, internalInstanceHandle: ReactReconciler.OpaqueHandle): any {
    },
    cloneHiddenTextInstance(instance: any, text: any, internalInstanceHandle: ReactReconciler.OpaqueHandle): any {
    },
    cloneInstance(instance: any, updatePayload: any, type: any, oldProps: any, newProps: any, internalInstanceHandle: ReactReconciler.OpaqueHandle, keepChildren: boolean, recyclableInstance: any): any {
    },
    commitHydratedContainer(container: any): void {
    },
    commitHydratedSuspenseInstance(suspenseInstance: any): void {
    },
    commitMount(instance: any, type: any, props: any, internalInstanceHandle: ReactReconciler.OpaqueHandle): void {
    },
    commitTextUpdate(textInstance: Text, oldText: string, newText: string): void {
        textInstance.value = newText;
    },
    createContainerChildSet(container: any): any {
    },
    detachDeletedInstance(node: any): void {
    },
    didNotFindHydratableContainerInstance(parentContainer: any, type: any, props: any): void {
    },
    didNotFindHydratableContainerSuspenseInstance(parentContainer: any): void {
    },
    didNotFindHydratableContainerTextInstance(parentContainer: any, text: string): void {
    },
    didNotFindHydratableInstance(parentType: any, parentProps: any, parentInstance: any, type: any, props: any): void {
    },
    didNotFindHydratableSuspenseInstance(parentType: any, parentProps: any, parentInstance: any): void {
    },
    didNotFindHydratableTextInstance(parentType: any, parentProps: any, parentInstance: any, text: string): void {
    },
    didNotHydrateContainerInstance(parentContainer: any, instance: any): void {
    },
    didNotHydrateInstance(parentType: any, parentProps: any, parentInstance: any, instance: any): void {
    },
    didNotMatchHydratedContainerTextInstance(parentContainer: any, textInstance: any, text: string): void {
    },
    didNotMatchHydratedTextInstance(parentType: any, parentProps: any, parentInstance: any, textInstance: any, text: string): void {
    },
    errorHydratingContainer(parentContainer: any): void {
    },
    finalizeContainerChildren(container: any, newChildren: any): void {
    },
    getFirstHydratableChild(parentInstance: any): any {
    },
    getInstanceFromScope(scopeInstance: any): any {
    },
    getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance: any): any {
    },
    getNextHydratableSibling(instance: any): any {
    },
    getParentSuspenseInstance(targetInstance: any): any {
    },
    hideInstance(instance: any): void {
    },
    hideTextInstance(textInstance: any): void {
    },
    hydrateInstance(instance: any, type: any, props: any, rootContainerInstance: any, hostContext: any, internalInstanceHandle: any): any[] | null {
        return null;
    },
    hydrateSuspenseInstance(suspenseInstance: any, internalInstanceHandle: any): void {
    },
    hydrateTextInstance(textInstance: any, text: string, internalInstanceHandle: any): boolean {
        return false;
    },
    isPrimaryRenderer: false,
    isSuspenseInstanceFallback(instance: any): boolean {
        return false;
    },
    isSuspenseInstancePending(instance: any): boolean {
        return false;
    },
    noTimeout: undefined,
    preparePortalMount(containerInfo: any): void {
    },
    registerSuspenseInstanceRetry(instance: any, callback: () => void): void {
    },
    replaceContainerChildren(container: any, newChildren: any): void {
    },
    resetTextContent(instance: any): void {
    },
    scheduleTimeout(fn: (...args: unknown[]) => unknown, delay: number | undefined): any {
    },
    supportsHydration: false,
    supportsPersistence: false,
    unhideInstance(instance: any, props: any): void {
    },
    unhideTextInstance(textInstance: any, text: string): void {
    },
    afterActiveInstanceBlur(): void {
    },
    beforeActiveInstanceBlur(): void {
    },
    getCurrentEventPriority(): ReactReconciler.Lane {
        return 0;
    },
    getInstanceFromNode(node: any): ReactReconciler.Fiber | null | undefined {
        return undefined;
    },
    prepareScopeUpdate(scopeInstance: any, instance: any): void {
    },
    // 定义一些东西怎样与 render 环境进行交互
    supportsMutation: true,
    /**
     * createInstance
     * @param type 字符串 eg:
     * @param props props eg: className, src
     * @param rootContainerInstance
     * @param hostContext
     * @param internalInstanceHandle
     * @return {Element}
     */
    createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        let el: any;
        const {style, ...restProps} = props;
        const options = {
            ...restProps,
            style: handelStyle(style),
            idName: restProps.id
        }
        if (constructorMap.has(type)) {
            let constructor = constructorMap.get(type)!;
            el = new constructor(options);
        } else {
            console.warn("不能解析标签" + type);
        }
        if (el && props.onClick) {
            el.on('click', props.onClick);
        }
        return el;
    },
    /**
     * createTextInstance
     * @param text 文字信息，例如下面的 click
     * @param rootContainerInstance
     * @param hostContext
     * @param internalInstanceHandle
     * @returns {Text}
     */
    createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
        return new Layout.Text({
            value: text
        });
    },
    appendChildToContainer(container, child) {
        container.appendChild(child)
    },
    appendChild(parentInstance, child) {
        parentInstance.appendChild(child)
    },
    appendInitialChild(parentInstance, child) {
        parentInstance.appendChild(child)
    },
    removeChildFromContainer(container, child) {
        container.removeChild(child)
    },
    removeChild(parentInstance, child) {
        parentInstance.removeChild(child)
    },
    insertInContainerBefore(container, child, beforeChild) {
        const index = container.children.findIndex((e: any) => e === beforeChild);
        child.parent = container;
        container.children.splice(index, 0, child);
        container.isDirty = true;
        var parent = container.parent;
        while (parent) {
            parent.isDirty = true;
            parent = parent.parent;
        }
    },
    insertBefore(parentInstance, child, beforeChild) {
        const index = parentInstance.children.findIndex((e: any) => e === beforeChild);
        child.parent = parentInstance;
        parentInstance.children.splice(index, 0, child);
        parentInstance.isDirty = true;
        var parent = parentInstance.parent;
        while (parent) {
            parent.isDirty = true;
            parent = parent.parent;
        }
    },

    prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
        if (oldProps.value !== newProps.value || oldProps.text !== newProps.text
            || oldProps.className !== newProps.className || oldProps.style !== newProps.style
            || oldProps.src !== newProps.src) {
            return instance;
        }
    },
    commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
        if (oldProps.value !== newProps.value) {
            (instance as any).value = newProps.value;
            (instance as any).text = newProps.value;
        }
        if (oldProps.className !== newProps.className) {
            instance.className = newProps.className;
        }
        if (oldProps.style !== newProps.style) {
            instance.style = handelStyle(newProps.style);
        }
        if (oldProps.src !== newProps.src) {
            (instance as any).src = newProps.src;
            Layout.reflow();
        }
    },
    finalizeInitialChildren(instance: any, type: any, props: any, rootContainer: any, hostContext: any): boolean {
        return false;
    },
    getChildHostContext(parentHostContext, type, rootContainerInstance) {
    },
    getPublicInstance(instance) {
    },
    getRootHostContext(rootContainerInstance) {
    },
    prepareForCommit(containerInfo: any): Record<string, any> | null {
        return null;
    },
    resetAfterCommit(containerInfo) {
    },
    clearContainer(container) {
    },
    shouldSetTextContent(type, props) {
        return type === 'text';
    }
})

let canvasEl: any;

export interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
}

const constructorMap = new Map<string, new (options: any) => any>([
    ['scrollview', Layout.ScrollView],
    ['text', Layout.Text],
    ['view', Layout.View],
    ['image', Layout.Image]
]);
const imgSrc = new Set<string>();
export default {
    render(canvas: Canvas, children: React.ReactNode) {
        canvasEl = canvas;
        let context = canvas.getContext("2d");
        Layout.clear();
        Layout.init('<view id="root"></view>', {root: {width: canvas.width, height: canvas.height}}, undefined as any);
        let box;
        // @ts-ignore
        if (window.GameGlobal) {
            box = {x: 0, y: 0, width: canvas.width / window.devicePixelRatio, height: canvas.height / window.devicePixelRatio}
        } else {
            box = canvas.getBoundingClientRect();
        }
        Layout.updateViewPort(box);
        Layout.layout(context);
        // 每次初始化之前先执行清理逻辑保证内存不会一直增长
        // 初始化引擎
        const container = reconciler.createContainer(Layout.getElementById('root')!, 0, null, false,
            null, '', () => {}, null)
        Layout.loadImgs(Array.from(imgSrc)).then(() => {
            reconciler.updateContainer(children, container, null, null)
        });
    },
    use(component: any) {
        Layout.use(component);
        constructorMap.set(component.name.toLowerCase(), (Layout as any)['RichText']);
    },
    loadImg(src: string) {
        imgSrc.add(src);
    }
}

export interface Canvas {
    getContext(contextId: "2d"): any;
    getBoundingClientRect(): any;
    width: number;
    height: number;
}
