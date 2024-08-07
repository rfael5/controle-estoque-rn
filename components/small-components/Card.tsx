import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const Card = () => (
    <div style={{backgroundColor:'white'}} className='bg-white rounded-lg p-4 columns-2'>
        <div className={`flex-row justify-between mb-4`}>
            <div className={`basis-1/3`}>
                <span className={`text-gray-600 text-sm`}>Label 1:</span>
                <span className={`text-gray-900 text-sm`}>Data 1</span>
            </div>
            <div className={`basis-1/3`}>
                <span className={`text-gray-600 text-sm`}>Label 2:</span>
                <span className={`text-gray-900 text-sm`}>Data 2</span>
            </div>
            <div className={`basis-1/3`}>
                <span className={`text-gray-600 text-sm`}>Label 3:</span>
                <span className={`text-gray-900 text-sm`}>Data 3</span>
            </div>
        </div>
        <div className={`flex-row justify-between`}>
            <div className={`basis-1/3`}>
                <span className={`text-gray-600 text-sm`}>Label 4:</span>
                <span className={`text-gray-900 text-sm`}>Data 4</span>
            </div>
            <div className={`basis-1/3`}>
                <span className={`text-gray-600 text-sm`}>Label 5:</span>
                <span className={`text-gray-900 text-sm`}>Data 5</span>
            </div>
            <div className={`basis-1/3`}>
                <span className={`text-gray-600 text-sm`}>Label 6:</span>
                <span className={`text-gray-900 text-sm`}>Data 6</span>
            </div>
        </div>
    </div>
);

export default Card

