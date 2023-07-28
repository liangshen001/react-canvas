import Layout from 'minigame-canvas-engine';
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

class Element extends Layout.Element {}
class Text extends Layout.Text {}
class View extends Layout.View {}
class ScrollView extends Layout.ScrollView {}
class Image extends Layout.Image {}

const reconciler = ReactReconciler<string, any, Element, Element, Text, Element, Element, any, any, any, any, any, any>({
    appendChildToContainerChildSet(childSet: any, child: any): void {
        console.debug('appendChildToContainerChildSet')
    },
    canHydrateInstance(instance: any, type: any, props: any): any {
        console.debug('canHydrateInstance')
    },
    canHydrateSuspenseInstance(instance: any): any {
        console.debug('canHydrateSuspenseInstance')
    },
    canHydrateTextInstance(instance: any, text: string): any {
        console.debug('canHydrateTextInstance')
    },
    cancelTimeout(id: any): void {
        console.debug('cancelTimeout')
    },
    cloneHiddenInstance(instance: any, type: any, props: any, internalInstanceHandle: ReactReconciler.OpaqueHandle): any {
        console.debug('cloneHiddenInstance')
    },
    cloneHiddenTextInstance(instance: any, text: any, internalInstanceHandle: ReactReconciler.OpaqueHandle): any {
        console.debug('cloneHiddenTextInstance')
    },
    cloneInstance(instance: any, updatePayload: any, type: any, oldProps: any, newProps: any, internalInstanceHandle: ReactReconciler.OpaqueHandle, keepChildren: boolean, recyclableInstance: any): any {

        console.debug('cloneInstance')
    },
    commitHydratedContainer(container: any): void {
        console.debug('commitHydratedContainer')
    },
    commitHydratedSuspenseInstance(suspenseInstance: any): void {
        console.debug('commitHydratedSuspenseInstance')
    },
    commitMount(instance: any, type: any, props: any, internalInstanceHandle: ReactReconciler.OpaqueHandle): void {
        console.debug('commitMount')
    },
    commitTextUpdate(textInstance: Text, oldText: string, newText: string): void {
        textInstance.value = newText;
    },
    createContainerChildSet(container: any): any {
        console.debug('createContainerChildSet')
    },
    detachDeletedInstance(node: any): void {
        console.debug('detachDeletedInstance')
    },
    didNotFindHydratableContainerInstance(parentContainer: any, type: any, props: any): void {
        console.debug('didNotFindHydratableContainerInstance')
    },
    didNotFindHydratableContainerSuspenseInstance(parentContainer: any): void {
        console.debug('didNotFindHydratableContainerSuspenseInstance')
    },
    didNotFindHydratableContainerTextInstance(parentContainer: any, text: string): void {
        console.debug('didNotFindHydratableContainerTextInstance')
    },
    didNotFindHydratableInstance(parentType: any, parentProps: any, parentInstance: any, type: any, props: any): void {
        console.debug('didNotFindHydratableInstance')
    },
    didNotFindHydratableSuspenseInstance(parentType: any, parentProps: any, parentInstance: any): void {
        console.debug('didNotFindHydratableSuspenseInstance')
    },
    didNotFindHydratableTextInstance(parentType: any, parentProps: any, parentInstance: any, text: string): void {
        console.debug('didNotFindHydratableTextInstance')
    },
    didNotHydrateContainerInstance(parentContainer: any, instance: any): void {
        console.debug('didNotHydrateContainerInstance')
    },
    didNotHydrateInstance(parentType: any, parentProps: any, parentInstance: any, instance: any): void {
        console.debug('didNotHydrateInstance')
    },
    didNotMatchHydratedContainerTextInstance(parentContainer: any, textInstance: any, text: string): void {
        console.debug('didNotMatchHydratedContainerTextInstance')
    },
    didNotMatchHydratedTextInstance(parentType: any, parentProps: any, parentInstance: any, textInstance: any, text: string): void {
        console.debug('didNotMatchHydratedTextInstance')
    },
    errorHydratingContainer(parentContainer: any): void {
        console.debug('errorHydratingContainer')
    },
    finalizeContainerChildren(container: any, newChildren: any): void {
        console.debug('finalizeContainerChildren')
    },
    getFirstHydratableChild(parentInstance: any): any {
        console.debug('getFirstHydratableChild')
    },
    getInstanceFromScope(scopeInstance: any): any {
        console.debug('getInstanceFromScope')
    },
    getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance: any): any {
        console.debug('getNextHydratableInstanceAfterSuspenseInstance')
    },
    getNextHydratableSibling(instance: any): any {
        console.debug('getNextHydratableSibling')
    },
    getParentSuspenseInstance(targetInstance: any): any {
        console.debug('getParentSuspenseInstance')
    },
    hideInstance(instance: any): void {
        console.debug('hideInstance')
    },
    hideTextInstance(textInstance: any): void {
        console.debug('hideTextInstance')
    },
    hydrateInstance(instance: any, type: any, props: any, rootContainerInstance: any, hostContext: any, internalInstanceHandle: any): any[] | null {
        console.debug('hydrateInstance')
        return null;
    },
    hydrateSuspenseInstance(suspenseInstance: any, internalInstanceHandle: any): void {
        console.debug('hydrateSuspenseInstance')
    },
    hydrateTextInstance(textInstance: any, text: string, internalInstanceHandle: any): boolean {
        console.debug('hydrateTextInstance')
        return false;
    },
    isPrimaryRenderer: false,
    isSuspenseInstanceFallback(instance: any): boolean {
        console.debug('isSuspenseInstanceFallback')
        return false;
    },
    isSuspenseInstancePending(instance: any): boolean {
        console.debug('isSuspenseInstancePending')
        return false;
    },
    noTimeout: undefined,
    preparePortalMount(containerInfo: any): void {
        console.debug('preparePortalMount')
    },
    registerSuspenseInstanceRetry(instance: any, callback: () => void): void {
        console.debug('registerSuspenseInstanceRetry')
    },
    replaceContainerChildren(container: any, newChildren: any): void {
        console.debug('replaceContainerChildren')
    },
    resetTextContent(instance: any): void {
        console.debug('resetTextContent')
    },
    scheduleTimeout(fn: (...args: unknown[]) => unknown, delay: number | undefined): any {
        console.debug('scheduleTimeout')
    },
    supportsHydration: false,
    supportsPersistence: false,
    unhideInstance(instance: any, props: any): void {
        console.debug('unhideInstance')
    },
    unhideTextInstance(textInstance: any, text: string): void {
        console.debug('unhideTextInstance')
    },
    afterActiveInstanceBlur(): void {
        console.debug('afterActiveInstanceBlur')
    },
    beforeActiveInstanceBlur(): void {
        console.debug('beforeActiveInstanceBlur')
    },
    getCurrentEventPriority(): ReactReconciler.Lane {
        console.debug('getCurrentEventPriority')
        return 0;
    },
    getInstanceFromNode(node: any): ReactReconciler.Fiber | null | undefined {
        console.debug('getInstanceFromNode', node)
        return undefined;
    },
    prepareScopeUpdate(scopeInstance: any, instance: any): void {
        console.debug('prepareScopeUpdate')
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
            style: handelStyle(style)
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
        const index = container.children.findIndex(e => e === beforeChild);
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
        console.debug('insertBefore')
        const index = parentInstance.children.findIndex(e => e === beforeChild);
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

        if (oldProps.value !== newProps.value) {
            return instance;
        }
        if (oldProps.text !== newProps.text) {
            return instance;
        }
        if (oldProps.className !== newProps.className) {
            return instance;
        }
        if (oldProps.style !== newProps.style) {
            return instance;
        }
        if (oldProps.src !== newProps.src) {
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
        console.debug('finalizeInitialChildren', instance, type, props, rootContainer, hostContext)
        return false;
    },
    getChildHostContext(parentHostContext, type, rootContainerInstance) {
        console.debug('getChildHostContext', parentHostContext, type, rootContainerInstance)
    },
    getPublicInstance(instance) {
        console.debug('getPublicInstance')
    },
    getRootHostContext(rootContainerInstance) {
        console.debug('getRootHostContext', rootContainerInstance)
    },
    prepareForCommit(containerInfo: any): Record<string, any> | null {
        console.debug('prepareForCommit')
        return null;
    },
    resetAfterCommit(containerInfo) {
        console.debug('resetAfterCommit')
    },
    clearContainer(container) {
        console.debug('clearContainer')
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
        Layout.updateViewPort(canvas.getBoundingClientRect());
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
