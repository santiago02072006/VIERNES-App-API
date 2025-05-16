// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://idejjytkaqkanyxbasrx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZWpqeXRrYXFrYW55eGJhc3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTgxOTIsImV4cCI6MjA2Mjk5NDE5Mn0.PElzThxIraUAhYfvkYdtVoDmqUjqQXMNB9rx0d0z8E0';
export const supabase = createClient(supabaseUrl, supabaseKey);