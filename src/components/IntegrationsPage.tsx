"use client";

import { FiMonitor, FiSave, FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const IntegrationsComponent = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className="p-4 mt-4">
            <div className="mx-auto max-w-5xl">
                <Tabs selected={selected} setSelected={setSelected} />

                <AnimatePresence mode="wait">
                    {FEATURES.map((tab, index) => {
                        return selected === index ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                key={index}
                            >
                                <tab.Feature />
                            </motion.div>
                        ) : undefined;
                    })}
                </AnimatePresence>
            </div>
        </section>
    );
};

const Tabs = ({ selected, setSelected }: { selected: number; setSelected: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div className="flex overflow-x-auto">
            {FEATURES.map((tab, index) => {
                return (
                    <Tab
                        key={index}
                        setSelected={setSelected}
                        selected={selected === index}
                        Icon={tab.Icon}
                        title={tab.title}
                        tabNum={index}
                    />
                );
            })}
        </div>
    );
};

const Tab = ({ selected, Icon, title, setSelected, tabNum }: { selected: boolean; Icon: React.ComponentType; title: string; setSelected: React.Dispatch<React.SetStateAction<number>>; tabNum: number }) => {
    return (
        <div className="relative w-full">
            <button
                onClick={() => setSelected(tabNum)}
                className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 p-6 transition-colors md:flex-col"
            >
                <span
                    className={`rounded-lg bg-gradient-to-br from-lime-700 from-10% to-lime-600 p-3 text-2xl text-white shadow-lime-400 transition-all duration-300 ${
                        selected
                        ? "scale-100 opacity-100 shadow-lg"
                        : "scale-90 opacity-50 shadow"
                    }`}
                >
                    <Icon />
                </span>
                <span
                    className={`min-w-[150px] max-w-[200px] text-start text-xs md:text-sm text-slate-400 transition-opacity md:text-center ${
                        selected ? "opacity-100" : "opacity-50"
                    }`}
                >
                    {title}
                </span>
            </button>
            {selected && (
                <motion.span
                    layoutId="tabs-features-underline"
                    className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-lime-600"
                />
            )}
        </div>
    );
};

const ExampleFeature = ({ Icon }: { Icon: React.ComponentType }) => (
    <div className="w-full px-0 py-8 md:px-8">
        <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 p-2">
                <p className="font-mono text-sm text-slate-200">
                    <span className="text-green-300">~</span> First Tab - Replace this with a demo of
                    your product 🚀
                </p>
            </div>

            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
                <Icon />
            </span>
        </div>
    </div>
);

const ExampleFeatureTwo = ({ Icon }: { Icon: React.ComponentType }) => (
    <div className="w-full px-0 py-8 md:px-8">
        <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 p-2">
                <p className="font-mono text-sm text-slate-200">
                    <span className="text-green-300">~</span> Second Tab - Replace this with a demo of your product 🚀
                </p>
            </div>

            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
                <Icon />
            </span>
        </div>
    </div>
);

const ExampleFeatureThree = ({ Icon }: { Icon: React.ComponentType }) => (
    <div className="w-full px-0 py-8 md:px-8">
        <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 p-2">
                <p className="font-mono text-sm text-slate-200">
                    <span className="text-green-300">~</span> Third Tab - Replace this with a demo of your product 🚀
                </p>
            </div>

            <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
                <Icon />
            </span>
        </div>
    </div>
);

export default IntegrationsComponent;

const FEATURES = [
    {
        title: "Some subtext about this first feature etc",
        Icon: FiSearch,
        Feature: () => <ExampleFeature Icon={FiSearch} />,
    },
    {
        title: "Some further info explaining the second one",
        Icon: FiSave,
        Feature: () => <ExampleFeatureTwo Icon={FiSave} />,
    },
    {
        title: "The third features the best though to be honest",
        Icon: FiMonitor,
        Feature: () => <ExampleFeatureThree Icon={FiMonitor} />,
    },
];