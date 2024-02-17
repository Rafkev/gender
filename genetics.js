// Function to determine the sex of a child based on parents' genetic information
function determineChildSex(fatherGene, motherGene) {
    // Assuming fatherGene and motherGene are strings representing the alleles (e.g., 'X' or 'Y')
    // Male is XY, Female is XX

    // If father's gene is Y and mother's gene is X, child will be male (XY)
    if (fatherGene === 'Y' && motherGene === 'X') {
        return 'Male';
    }
    // If father's gene is X and mother's gene is X, child will be female (XX)
    else if (fatherGene === 'X' && motherGene === 'X') {
        return 'Female';
    }
    // Otherwise, child's sex is indeterminate or cannot be determined based on provided genes
    else {
        return 'Indeterminate';
    }
}

// Example usage:
const fatherGene = 'Y'; // Example: Father's gene
const motherGene = 'X'; // Example: Mother's gene

const childSex = determineChildSex(fatherGene, motherGene);
console.log("Child's Sex:", childSex);
